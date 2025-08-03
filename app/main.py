from fastapi import FastAPI, HTTPException
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core.settings import Settings
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

Settings.embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
Settings.llm = None # Desactivado segun error de consola

# Cargo e indexo la informacion que guarde en data (Código extraido de la documentación de llamaIndex) 
documents = SimpleDirectoryReader("data").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()

# query = "¿Que forma tiene el sombrero?"
# response = query_engine.query(query)
# print(response) 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/query")
def ask(q: str):
    try:
        response = query_engine.query(q)
        answer = response.response

    except HTTPException:
        raise
    
    return {"answer": answer}