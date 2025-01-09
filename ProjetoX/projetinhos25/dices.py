import random
from PIL import Image
import requests
from io import BytesIO

# Lista de caminhos de imagens locais ou URLs
image_list = [
    "C:\Users\LSDC\Documents\GitHub\ProjetosX\ProjetoX\projetinhos25\dados_img",  # Imagem local
]

# Escolhe uma imagem aleatoriamente
selected_image = random.choice(image_list)

# Exibe a imagem
if selected_image.startswith("http"):
    # Caso seja uma URL
    response = requests.get(selected_image)
    img = Image.open(BytesIO(response.content))
else:
    # Caso seja uma imagem local
    img = Image.open(selected_image)

# Mostra a imagem
img.show()