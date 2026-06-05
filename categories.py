from fastapi import APIRouter
from main import categories

router = APIRouter()

@router.post("/categories")
def add_category(name:str):
    categories.append(name)
