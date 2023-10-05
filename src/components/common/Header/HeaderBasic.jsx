import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import { ReactComponent as IconArrowBasic } from "../../../assets/images/icon-arrow-basic.svg";
import { ReactComponent as IconShowModal } from "../../../assets/images/icon-show-modal.svg";
import { ReactComponent as IconSearch } from "../../../assets/images/icon-search.svg";
import { ReactComponent as IconAlarm } from "../../../assets/images/icon-alarm.svg";
import {useEffect, useState} from "react";
import Modal from "../Modal/Modal";
import CheckModal from "../Modal/CheckModal";
import ProductDeleteAPI from "../../../apis/services/ProductDeleteAPI";

const HeaderBasic = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modalForCheck, setModalForCheck] = useState(false);

    useEffect(() => {
        setModal(false);
    }, []);

    const handleCancel = () => {
        setModal(false);
        setModalForCheck(false);
    }
    const handleShowModal = () => {
        setModal(!modal);
    }
    const handleProductDelete = ProductDeleteAPI(id);



    return (
        <HeaderBasicStyle>
            <button onClick={() => {navigate(-1)}}>
                <IconArrowBasic width="24" height="24" />
            </button>

            <div className="header-buttons">
                <button>
                    <IconSearch width="22" height="22" stroke="#222" />
                </button>
                <button>
                    <IconAlarm width="24" height="24" />
                </button>
                <button onClick={handleShowModal}>
                    <IconShowModal width="24" height="24" stroke="#222" fill="#222"/>
                </button>
            </div>

            {modal && (
                <Modal
                    firstButton={props.firstButton}
                    secondButton={props.secondButton}
                    handleCancel={handleCancel}
                />
            )}
            {modalForCheck && (
                <CheckModal
                    handleCancel={handleCancel}
                    handleProductDelete={handleProductDelete}
                />
            )}
        </HeaderBasicStyle>
    )
}

export default HeaderBasic;

const HeaderBasicStyle = styled.header`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  border-bottom: 1px solid #ccc;

  background-color: #fff;

  position: absolute;
  top: 0;
  left: 0;
  
  button {
    padding: 8px;
  }
  
  .header-buttons {
    display: flex;
    align-items: center;
  }
`