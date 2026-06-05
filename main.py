from fastapi import FastAPI
from categories import router as categories_router
from expenses import router as expenses_router

categories = []

app = FastAPI()
app.include_router(categories_router)
app.include_router(expenses_router)