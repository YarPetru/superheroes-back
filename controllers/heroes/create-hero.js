// const path = require('path');
// const fs = require('fs/promises');

const Hero = require('../../models/hero-model');

// const imagesDir = path.join(__dirname, '..', '..', 'public', 'hero-images');

const createHero = async (request, response) => {
  // // отримуємо необхідні дані з файла
  // const { path: tempUpload, originalname } = request.files[0];
  // // створюємо шлях де файл необхідно зберегти
  // const resultUpload = path.join(imagesDir, originalname);
  // // переміщуємо з тимчасової папки до потрібної
  // await fs.rename(tempUpload, resultUpload);
  // // записуємо отриманий шлях в БД.
  // const imageUrl = path.join('hero-images', originalname);
  // //---------
  // const result = await Hero.create({ ...request.body, images: imageUrl });
  const result = await Hero.create(request.body);
  response.status(201).json(result);
};

module.exports = createHero;
