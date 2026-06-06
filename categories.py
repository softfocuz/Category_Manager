from fastapi import APIRouter
from storage import categories

router = APIRouter()

@router.get("/")
def get_category():
    return {"category": categories}

@router.post("/categories")
def add_category(name:str, subtext:str):
    categories.append({"name":name, "subtext":subtext})
    return {"category": categories}

@router.delete("/categories/{name}")
def delete_category(name:str):
    categories.remove(name)
    return{"delete":categories}

@router.put("/categories/{name}")
def update_category(name:str, new_name:str):
    index = categories.index(name)
    categories[index] = new_name
    return{"update": categories}



