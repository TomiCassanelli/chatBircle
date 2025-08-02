from fastapi import FastAPI
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core.settings import Settings

app = FastAPI()

Settings.embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
Settings.llm = None # Desactivado segun error de consola

# Cargo e indexo la informacion que guarde en data (Código extraido de la documentación de llamaIndex) 
documents = SimpleDirectoryReader("data").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()

query = "¿Que forma tiene el sombrero?"
response = query_engine.query(query)
print(response) 

# Defino la ruta de entrada, algo basico, luego veo si lo cambio o lo saco
@app.get("/")
def root():
    return {"message": "Hello World"}
