const path = require('path');
const fs = require('fs/promises');

const Hero = require('../../models/hero-model');

const { HttpError } = require('../../helpers');

const imagesDir = path.join(__dirname, '..', '..', 'public', 'hero-images');

const updateContact = async (request, response) => {
  const { id } = request.params;
  const { path: tempUpload, originalname } = request.files[0];
  // створюємо шлях де файл необхідно зберегти
  const resultUpload = path.join(imagesDir, originalname);
  // переміщуємо з тимчасової папки до потрібної
  await fs.rename(tempUpload, resultUpload);
  // записуємо отриманий шлях в БД.
  const imageUrl = path.join('hero-images', originalname);
  //-------
  const result = await Hero.findByIdAndUpdate(
    id,
    { ...request.body, images: imageUrl },
    { new: true }
  );
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  response.json(result);
};

module.exports = updateContact;
