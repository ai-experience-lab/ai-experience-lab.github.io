import os
from PIL import Image
import pathlib

source_folder = "src/images/lab_photo"
target_folder = "src/images/lab_photo_resize"

os.makedirs(target_folder, exist_ok=True)
for f in pathlib.Path(target_folder).glob('*'): f.unlink()

TARGET_SIZE = (300, 300)
MAX_FILE_SIZE = 500 * 1024  # 500KB in bytes

def resize_and_compress_image(input_path, output_path):
    """이미지를 리사이즈하고 500KB 이하로 압축"""
    try:
        img = Image.open(input_path)
        
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        orig_width, orig_height = img.size
        aspect_ratio = orig_width / orig_height
        
        if orig_width < orig_height:
            new_width = TARGET_SIZE[0]
            new_height = int(TARGET_SIZE[0] / aspect_ratio)
        else:
            new_height = TARGET_SIZE[1]
            new_width = int(TARGET_SIZE[1] * aspect_ratio)
        
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        width, height = img.size
        left = (width - TARGET_SIZE[0]) / 2
        top = (height - TARGET_SIZE[1]) / 2
        right = (width + TARGET_SIZE[0]) / 2
        bottom = (height + TARGET_SIZE[1]) / 2
        
        img = img.crop((left, top, right, bottom))
        
        quality = 100
        while quality > 10:
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            file_size = os.path.getsize(output_path)
            
            if file_size <= MAX_FILE_SIZE:
                print(f"✓ {os.path.basename(input_path)} -> {os.path.basename(output_path)} ({file_size / 1024:.1f}KB, quality={quality})")
                return True
            
            quality -= 5
        
        print(f"⚠ {os.path.basename(input_path)}: 최소 품질로도 {file_size / 1024:.1f}KB")
        return True
        
    except Exception as e:
        print(f"✗ {os.path.basename(input_path)} 처리 실패: {str(e)}")
        return False

image_extensions = {'.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'}
processed_count = 0
failed_count = 0

def get_unique_output_path(folder, stem):
    output_path = os.path.join(folder, stem + '.jpg')
    index = 1

    while os.path.exists(output_path):
        output_path = os.path.join(folder, f"{stem}-{index}.jpg")
        index += 1

    return output_path

for filename in os.listdir(source_folder):
    file_path = os.path.join(source_folder, filename)
    
    if os.path.isfile(file_path) and pathlib.Path(filename).suffix in image_extensions:

        output_stem = pathlib.Path(filename).stem
        output_path = get_unique_output_path(target_folder, output_stem)
        
        if resize_and_compress_image(file_path, output_path):
            processed_count += 1
        else:
            failed_count += 1

print(f"\n완료: {processed_count}개 처리, {failed_count}개 실패")
