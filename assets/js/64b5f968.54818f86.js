"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=l,_=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return n?r.createElement(_,a(a({ref:t},u),{},{components:n})):r.createElement(_,a({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9594:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_label:"retrieve_utils",title:"retrieve_utils"},a=void 0,o={unversionedId:"reference/retrieve_utils",id:"reference/retrieve_utils",isDocsHomePage:!1,title:"retrieve_utils",description:"num\\tokens\\from\\_text",source:"@site/docs/reference/retrieve_utils.md",sourceDirName:"reference",slug:"/reference/retrieve_utils",permalink:"/autogen/docs/reference/retrieve_utils",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/retrieve_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"retrieve_utils",title:"retrieve_utils"},sidebar:"referenceSideBar",previous:{title:"math_utils",permalink:"/autogen/docs/reference/math_utils"}},s=[{value:"num_tokens_from_text",id:"num_tokens_from_text",children:[],level:4},{value:"num_tokens_from_messages",id:"num_tokens_from_messages",children:[],level:4},{value:"split_text_to_chunks",id:"split_text_to_chunks",children:[],level:4},{value:"extract_text_from_pdf",id:"extract_text_from_pdf",children:[],level:4},{value:"split_files_to_chunks",id:"split_files_to_chunks",children:[],level:4},{value:"get_files_from_dir",id:"get_files_from_dir",children:[],level:4},{value:"get_file_from_url",id:"get_file_from_url",children:[],level:4},{value:"is_url",id:"is_url",children:[],level:4},{value:"create_vector_db_from_dir",id:"create_vector_db_from_dir",children:[],level:4},{value:"query_vector_db",id:"query_vector_db",children:[],level:4}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"num_tokens_from_text"},"num","_","tokens","_","from","_","text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def num_tokens_from_text(\n    text: str,\n    model: str = "gpt-3.5-turbo-0613",\n    return_tokens_per_name_and_message: bool = False,\n    custom_token_count_function: Callable = None\n) -> Union[int, Tuple[int, int, int]]\n')),(0,l.kt)("p",null,"Return the number of tokens used by a text."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text")," ",(0,l.kt)("em",{parentName:"li"},"str")," - The text to count tokens for."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"model")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - The model to use for tokenization. Default is "gpt-3.5-turbo-0613".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"return_tokens_per_name_and_message")," ",(0,l.kt)("em",{parentName:"li"},"Optional, bool")," - Whether to return the number of tokens per name and per\nmessage. Default is False."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"custom_token_count_function")," ",(0,l.kt)("em",{parentName:"li"},"Optional, Callable")," - A custom function to count tokens. Default is None.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int")," - The number of tokens used by the text."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int")," - The number of tokens per message. Only returned if return_tokens_per_name_and_message is True."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int")," - The number of tokens per name. Only returned if return_tokens_per_name_and_message is True.")),(0,l.kt)("h4",{id:"num_tokens_from_messages"},"num","_","tokens","_","from","_","messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def num_tokens_from_messages(messages: dict,\n                             model: str = "gpt-3.5-turbo-0613",\n                             custom_token_count_function: Callable = None,\n                             custom_prime_count: int = 3)\n')),(0,l.kt)("p",null,"Return the number of tokens used by a list of messages."),(0,l.kt)("h4",{id:"split_text_to_chunks"},"split","_","text","_","to","_","chunks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def split_text_to_chunks(text: str,\n                         max_tokens: int = 4000,\n                         chunk_mode: str = "multi_lines",\n                         must_break_at_empty_line: bool = True,\n                         overlap: int = 10)\n')),(0,l.kt)("p",null,"Split a long text into chunks of max_tokens."),(0,l.kt)("h4",{id:"extract_text_from_pdf"},"extract","_","text","_","from","_","pdf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def extract_text_from_pdf(file: str) -> str\n")),(0,l.kt)("p",null,"Extract text from PDF files"),(0,l.kt)("h4",{id:"split_files_to_chunks"},"split","_","files","_","to","_","chunks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def split_files_to_chunks(files: list,\n                          max_tokens: int = 4000,\n                          chunk_mode: str = "multi_lines",\n                          must_break_at_empty_line: bool = True)\n')),(0,l.kt)("p",null,"Split a list of files into chunks of max_tokens."),(0,l.kt)("h4",{id:"get_files_from_dir"},"get","_","files","_","from","_","dir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_files_from_dir(dir_path: str,\n                       types: list = TEXT_FORMATS,\n                       recursive: bool = True)\n")),(0,l.kt)("p",null,"Return a list of all the files in a given directory."),(0,l.kt)("h4",{id:"get_file_from_url"},"get","_","file","_","from","_","url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_file_from_url(url: str, save_path: str = None)\n")),(0,l.kt)("p",null,"Download a file from a URL."),(0,l.kt)("h4",{id:"is_url"},"is","_","url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def is_url(string: str)\n")),(0,l.kt)("p",null,"Return True if the string is a valid URL."),(0,l.kt)("h4",{id:"create_vector_db_from_dir"},"create","_","vector","_","db","_","from","_","dir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def create_vector_db_from_dir(dir_path: str,\n                              max_tokens: int = 4000,\n                              client: API = None,\n                              db_path: str = "/tmp/chromadb.db",\n                              collection_name: str = "all-my-documents",\n                              get_or_create: bool = False,\n                              chunk_mode: str = "multi_lines",\n                              must_break_at_empty_line: bool = True,\n                              embedding_model: str = "all-MiniLM-L6-v2",\n                              embedding_function: Callable = None)\n')),(0,l.kt)("p",null,"Create a vector db from all the files in a given directory, the directory can also be a single file or a url to\na single file. We support chromadb compatible APIs to create the vector db, this function is not required if\nyou prepared your own vector db."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dir_path")," ",(0,l.kt)("em",{parentName:"li"},"str")," - the path to the directory, file or url."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_tokens")," ",(0,l.kt)("em",{parentName:"li"},"Optional, int")," - the maximum number of tokens per chunk. Default is 4000."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client")," ",(0,l.kt)("em",{parentName:"li"},"Optional, API")," - the chromadb client. Default is None."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db_path")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the path to the chromadb. Default is "/tmp/chromadb.db".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"collection_name")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the name of the collection. Default is "all-my-documents".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"get_or_create")," ",(0,l.kt)("em",{parentName:"li"},"Optional, bool")," - Whether to get or create the collection. Default is False. If True, the collection\nwill be recreated if it already exists."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chunk_mode")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the chunk mode. Default is "multi_lines".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"must_break_at_empty_line")," ",(0,l.kt)("em",{parentName:"li"},"Optional, bool")," - Whether to break at empty line. Default is True."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"embedding_model")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the embedding model to use. Default is "all-MiniLM-L6-v2". Will be ignored if\nembedding_function is not None.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"embedding_function")," ",(0,l.kt)("em",{parentName:"li"},"Optional, Callable")," - the embedding function to use. Default is None, SentenceTransformer with\nthe given ",(0,l.kt)("inlineCode",{parentName:"li"},"embedding_model")," will be used. If you want to use OpenAI, Cohere, HuggingFace or other embedding\nfunctions, you can pass it here, follow the examples in ",(0,l.kt)("inlineCode",{parentName:"li"},"https://docs.trychroma.com/embeddings"),".")),(0,l.kt)("h4",{id:"query_vector_db"},"query","_","vector","_","db"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def query_vector_db(query_texts: List[str],\n                    n_results: int = 10,\n                    client: API = None,\n                    db_path: str = "/tmp/chromadb.db",\n                    collection_name: str = "all-my-documents",\n                    search_string: str = "",\n                    embedding_model: str = "all-MiniLM-L6-v2",\n                    embedding_function: Callable = None) -> QueryResult\n')),(0,l.kt)("p",null,"Query a vector db. We support chromadb compatible APIs, it's not required if you prepared your own vector db\nand query function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_texts")," ",(0,l.kt)("em",{parentName:"li"},"List","[str]")," - the query texts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n_results")," ",(0,l.kt)("em",{parentName:"li"},"Optional, int")," - the number of results to return. Default is 10."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client")," ",(0,l.kt)("em",{parentName:"li"},"Optional, API")," - the chromadb compatible client. Default is None, a chromadb client will be used."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db_path")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the path to the vector db. Default is "/tmp/chromadb.db".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"collection_name")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the name of the collection. Default is "all-my-documents".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"search_string")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the search string. Default is "".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"embedding_model")," ",(0,l.kt)("em",{parentName:"li"},"Optional, str"),' - the embedding model to use. Default is "all-MiniLM-L6-v2". Will be ignored if\nembedding_function is not None.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"embedding_function")," ",(0,l.kt)("em",{parentName:"li"},"Optional, Callable")," - the embedding function to use. Default is None, SentenceTransformer with\nthe given ",(0,l.kt)("inlineCode",{parentName:"li"},"embedding_model")," will be used. If you want to use OpenAI, Cohere, HuggingFace or other embedding\nfunctions, you can pass it here, follow the examples in ",(0,l.kt)("inlineCode",{parentName:"li"},"https://docs.trychroma.com/embeddings"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"QueryResult")," - the query result. The format is:\nclass QueryResult(TypedDict):"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ids")," - List","[IDs]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"embeddings")," - Optional[List[List","[Embedding]","]]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"documents")," - Optional[List[List","[Document]","]]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metadatas")," - Optional[List[List","[Metadata]","]]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distances")," - Optional[List[List","[float]","]]")))}u.isMDXComponent=!0}}]);