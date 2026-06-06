from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from categories import router as categories_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(categories_router)
