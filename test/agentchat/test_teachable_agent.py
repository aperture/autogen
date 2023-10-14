import sys
from autogen import ConversableAgent, UserProxyAgent, config_list_from_json
from autogen.agentchat.contrib.teachable_agent import TeachableAgent


try:
    from termcolor import colored
except ImportError:
    def colored(x, *args, **kwargs):
        return x


verbosity = 1  # 0 to print the basic user chat, 1 to include memory operations, 2 to add analyzer messages.
assert_on_error = False  # GPT-4 nearly always succeeds on these unit tests, but GPT-3.5 is a bit less reliable.
recall_threshold = 1.5  # Higher numbers allow more (but less relevant) memos to be recalled.

# Specify the model to use by uncommenting one of the following lines.
# filter_dict={"model": ["gpt-4-0613"]}
# filter_dict={"model": ["gpt-3.5-turbo-0613"]}
# filter_dict={"model": ["gpt-4"]}
filter_dict={"model": ["gpt-35-turbo-16k"]}


def create_teachable_agent(reset_db=False):
    """Instantiates a TeachableAgent using the settings from the top of this file."""
    # Load LLM inference endpoints from an env variable or a file
    # See https://microsoft.github.io/autogen/docs/FAQ#set-your-api-endpoints
    # and OAI_CONFIG_LIST_sample
    config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST", filter_dict=filter_dict)
    agent = TeachableAgent(
        name="agent",
        llm_config={"config_list": config_list},
        teach_config={
            "verbosity": verbosity,
            "reset_db": reset_db,
            "path_to_db_dir": "./tmp/teachable_agent_db",
            "recall_threshold": recall_threshold})
    return agent


def check_agent_response(agent, user, correct_answer):
    """Checks whether the agent's response contains the correct answer, and returns the number of errors (1 or 0)."""
    agent_response = user.last_message(agent)["content"]
    if correct_answer not in agent_response:
        print(colored(f"\nTEST FAILED:  EXPECTED ANSWER {correct_answer} NOT FOUND IN AGENT RESPONSE", 'light_red'))
        if assert_on_error:
            assert correct_answer in agent_response
        return 1
    else:
        print(colored(f"\nTEST PASSED:  EXPECTED ANSWER {correct_answer} FOUND IN AGENT RESPONSE", 'light_cyan'))
        return 0


def interact_freely_with_user():
    """Starts a free-form chat between the user and a TeachableAgent."""

    # Create the agents.
    print(colored("\nLoading previous memory (if any) from disk.", 'light_cyan'))
    agent = create_teachable_agent(reset_db=False)
    user = UserProxyAgent("user", human_input_mode="ALWAYS")

    # Start the chat.
    print(colored("\nTo clear the context and start a new chat, type 'new chat'.", 'light_cyan'))
    user.initiate_chat(agent, message="Hi")

    # Let the agent remember things that should be learned from this chat.
    agent.learn_from_recent_user_comments()

    # Wrap up.
    agent.close_db()


def test_question_answer_pair():
    """Tests whether the agent can answer a question after being taught the answer in a previous chat."""
    print(colored("\nTEST QUESTION-ANSWER PAIRS", 'light_cyan'))
    num_errors, num_tests = 0, 0
    agent = create_teachable_agent(reset_db=True)  # For a clean test, clear the agent's memory.
    user = ConversableAgent("user", max_consecutive_auto_reply=0, llm_config=False, human_input_mode="NEVER")

    # Prepopulate memory with a few arbitrary memos, just to make retrieval less trivial.
    agent.prepopulate_db()

    # Ask the agent to do something using terminology it doesn't understand.
    user.initiate_chat(recipient=agent, message="What is the twist of 5 and 7?")

    # Explain the terminology to the agent.
    user.send(recipient=agent, message="Actually, the twist of two or more numbers is their product minus their sum.")
    num_errors += check_agent_response(agent, user, "23")
    num_tests += 1

    # Let the agent remember things that should be learned from this chat.
    agent.learn_from_recent_user_comments()

    # Now start a new chat to clear the context, and require the agent to use its new knowledge.
    print(colored("\nSTARTING A NEW CHAT WITH EMPTY CONTEXT", 'light_cyan'))
    user.initiate_chat(recipient=agent, message="What's the twist of 8 and 3 and 2?")
    num_errors += check_agent_response(agent, user, "35")
    num_tests += 1

    # Wrap up.
    agent.close_db()
    return num_errors, num_tests


def test_task_advice_pair():
    """Tests whether the agent can recall and use advice after being taught a task-advice pair in a previous chat."""
    print(colored("\nTEST TASK-ADVICE PAIRS", 'light_cyan'))
    num_errors, num_tests = 0, 0
    agent = create_teachable_agent(reset_db=True)  # For a clean test, clear the agent's memory.
    user = ConversableAgent("user", max_consecutive_auto_reply=0, llm_config=False, human_input_mode="NEVER")

    # Prepopulate memory with a few arbitrary memos, just to make retrieval less trivial.
    agent.prepopulate_db()

    # Ask the agent to do something, and provide some helpful advice.
    user.initiate_chat(recipient=agent, message="Compute the twist of 5 and 7. Here's a hint: The twist of two or more numbers is their product minus their sum.")
    num_errors += check_agent_response(agent, user, "23")
    num_tests += 1

    # Let the agent remember things that should be learned from this chat.
    agent.learn_from_recent_user_comments()

    # Now start a new chat to clear the context, and require the agent to use its new knowledge.
    print(colored("\nSTARTING A NEW CHAT WITH EMPTY CONTEXT", 'light_cyan'))
    user.initiate_chat(recipient=agent, message="Please calculate the twist of 8 and 3 and 2.")
    num_errors += check_agent_response(agent, user, "35")
    num_tests += 1

    # Wrap up.
    agent.close_db()
    return num_errors, num_tests


if __name__ == "__main__":
    """Runs the unit tests from above, unless the user adds 'interactive' or 'i' as a commandline argument."""
    if len(sys.argv) > 1:
        if sys.argv[1].startswith('i'):
            interact_freely_with_user()
            exit()

    total_num_errors, total_num_tests = 0, 0

    num_trials = 1
    for trial in range(num_trials):
        num_errors, num_tests = test_question_answer_pair()
        total_num_errors += num_errors
        total_num_tests += num_tests

        num_errors, num_tests = test_task_advice_pair()
        total_num_errors += num_errors
        total_num_tests += num_tests

        print(colored(f"\nTRIAL {trial + 1} OF {num_trials} FINISHED", 'light_cyan'))

    if total_num_errors == 0:
        print(colored("\nTEACHABLE AGENT TESTS FINISHED WITH ZERO ERRORS", 'light_cyan'))
    else:
        print(colored(f"\nTEACHABLE AGENT TESTS FINISHED WITH {total_num_errors} / {total_num_tests} TOTAL ERRORS ({100.0 * total_num_errors / total_num_tests}%)", 'light_red'))