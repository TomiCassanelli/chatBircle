# chatBircle

Desarrollo de prueba técnica para pasantías en Bircle AI.  
Iniciado el 02/08/2025.
Realizado mientras curso el último año de Ingeniería en Sistemas en la Universidad Católica de Córdoba.


## Descripción breve
API RESTful hecha con FastAPI que usa LlamaIndex para responder preguntas sobre documentos de texto.
Investigando, la libreria de Llama solicitaba una ApiKey de OpenAI (los errores eran visibles desde la terminal) la idea para realizar las funcionalidades correspondientes, era no depender de IA externa, sobretodo de OpenAI que es pago por uso. Debido a eso se descubrió en el siguiente link https://m-ruminer.medium.com/ai-rag-with-llamaindex-local-embedding-and-ollama-llama-3-1-8b-b0620116a715 el uso de IA embebida, instalando el paquete llama-index-embeddings-huggingface. Funciona de una manera muy simple, que no amolda la respuesta directamente a la pregunta que se realizaría, sino que brinda una porción del texto que se guardó en /data.

## Comandos utilizados para backend
- Comando para crear el environment virtual (solo una vez): python -m venv venv
- Comando para iniciar el environment virtual: .\venv\Scripts\Activate.ps1
- Comando para salir del environment virtual: deactivate
- Comando para instalar las librerias necesarias: pip install -r requirements.txt
- Comando para levantar la API: uvicorn main:app --reload

## Comandos utilizados para frontend
- Comando para crear el proyecto de next.js: npx create-next-app@latest frontend
- Comando para levantar el frontend: npm run dev
- Comando para instalar todas las dependencias necesarias: npm install