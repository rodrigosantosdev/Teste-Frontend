import { useState } from "react";
import { ContainerGrid } from "../Container/style";
import { Divisor } from "../Divisor";
import { OptionItem } from "../OptionItem";
import data from "../../Mock/data.json";
import {
  CardItem,
  CardImage,
  CardDesk,
  ContainerVideo,
  OptionContent,
  StyleForm,
  StyledSpan,
  StyledSelect,
  OptionsContainer,
  ModalContent,
  ModalTitle,
  ModalVideo,
  ModalInfo,
  ModalButton,
  ModalWrapper,
  ModalIcon,
} from "./style";
import { Modal } from "../Modal";
import { Pagination } from "../Pagination";
import { FiDownloadCloud } from 'react-icons/fi'

interface Item {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface Data {
  items: Item[];
}

interface ModalProps {
  title: string;
  description: string;
  link: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Videos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<ModalProps | null>(null);

  const openModal = (index: number) => {
    const selectedItem = currentItems[index];
    const modalProps: ModalProps = {
      title: selectedItem.title,
      description: selectedItem.description,
      link: selectedItem.link,
      isOpen: true,
      onClose: closeModal,
    };
    setSelectedCard(modalProps);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Defina o número de itens por página
  const jsonData: Data = data;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jsonData.items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ContainerGrid>
      <OptionsContainer>
        <OptionContent>
          <OptionItem
            border="1px solid #314D5E"
            bgColor="#fff"
            textColor="#314D5E"
          >
            Agência
          </OptionItem>
          <OptionItem
            border="1px solid #2C83FB"
            bgColor="#fff"
            textColor="#2C83FB"
          >
            Chatbot
          </OptionItem>
          <OptionItem
            border="1px solid #314D5E"
            bgColor="#fff"
            textColor="#314D5E"
          >
            Marketing Digital
          </OptionItem>
          <OptionItem
            border="1px solid #2C83FB"
            bgColor="#2C83FB"
            textColor="#fff"
          >
            Geração de Leads
          </OptionItem>
          <OptionItem
            border="1px solid #314D5E"
            bgColor="#fff"
            textColor="#314D5E"
          >
            Mídia Paga
          </OptionItem>
        </OptionContent>
        <StyleForm>
          <StyledSpan>Ordenar por</StyledSpan>
          <StyledSelect name="select" id="select">
            <option value="1">Data de Publicação</option>
          </StyledSelect>
        </StyleForm>
      </OptionsContainer>
      <Divisor />
      <ContainerVideo>
        {currentItems.map((item, index) => (
          <CardItem key={index} onClick={() => openModal(index)}>
            <CardImage>
              <img src={item.image} alt="capa" width={362} height={204} />
            </CardImage>
            <CardDesk>{item.title}</CardDesk>
          </CardItem>
        ))}

        <Modal isOpen={isOpen} onClose={closeModal}>
        {selectedCard && (
          <ModalContent>
            <ModalTitle>
              <span>Webinar:</span>{selectedCard.title}
            </ModalTitle>
            <ModalVideo>
            <iframe src={selectedCard.link} title="Video"></iframe>
            </ModalVideo>
            <ModalInfo>
              <h3>Descrição</h3>
              <Divisor />
              <p>
                {selectedCard.description}
              </p>
              <h4>Downloads</h4>
              <Divisor />
              <ModalWrapper>
                <ModalButton type="button" color="#C2F4EA" text="#00B78F">
                <ModalIcon color="#9FEFDF" text="#00B78F">
                    <FiDownloadCloud size={18} />
                  </ModalIcon>
                  <span>Spreadsheet.xls</span>
                </ModalButton>
                <ModalButton type="button" color="#C2E6FF" text="#0073EA">
                <ModalIcon color="#A1D9FF" text="#0073EA">
                  <FiDownloadCloud size={18} />
                </ModalIcon>
                  <span>Document.doc</span>
                </ModalButton>
                <ModalButton type="button" color="#FFF8D0" text="#AE9628">
                  <ModalIcon color="#FFF1A0" text="#AE9628">
                    <FiDownloadCloud size={18} />
                  </ModalIcon>
                  <span>Presentation.ppt</span>
                </ModalButton>
              </ModalWrapper>

            </ModalInfo>
          </ModalContent>
          )}
        </Modal>
        <Divisor />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={jsonData.items.length}
          paginate={paginate} currentPage={0} handleClick={function (pageNumber: number): void {
            throw new Error("Function not implemented.");
          } }        />
      </ContainerVideo>
    </ContainerGrid>
  );
};
