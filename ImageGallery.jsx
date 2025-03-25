import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "https://source.unsplash.com/random/400x300?nature",
  "https://source.unsplash.com/random/400x300?water",
  "https://source.unsplash.com/random/400x300?mountain",
  "https://source.unsplash.com/random/400x300?forest",
  "https://source.unsplash.com/random/400x300?city"
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className="rounded-lg cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => openImage(index)}
        />
      ))}

      {selectedImage && (
        <Modal isOpen={true} onClose={closeModal}>
          <ModalContent>
            <ModalHeader>Image Preview</ModalHeader>
            <ModalCloseButton onClick={closeModal} />
            <ModalBody className="flex flex-col items-center">
              <img src={selectedImage} alt="Selected" className="rounded-lg" />
              <div className="mt-4 flex gap-4">
                <Button onClick={prevImage}><ArrowLeft /></Button>
                <Button onClick={nextImage}><ArrowRight /></Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
