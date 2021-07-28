import React, {useState} from 'react';
import $ from 'jquery'
import {Modal, Button} from "react-bootstrap";
import Header from "../MainPage/Header/Header";

const Cocktail = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = e => {
        e.preventDefault();
        $('.cardHolder > div').remove('.card');
        const cocktailName = $('#cocktailName').val().toLowerCase();

        $.ajax({
            method: 'GET',
            url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName,

            success: response => {
                for (const key in response) {

                    for (const key2 in response[key]) {
                        $('.cardHolder').append(
                            `<div
                                    class="card card${key2} ${response[key][key2].strDrink}"
                                    style="width: 18rem"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >`);

                        $('.card' + key2)
                            .append(`<img src="${response[key][key2].strDrinkThumb}" style="width: auto" height="auto">`)
                            .append(`<p>${response[key][key2].strDrink}</p>`);

                        const btn = $('.card' + key2);

                        btn.on('click', () => {
                            handleShow();
                            $('.modal-title').text('Cocktail info');
                            $('.modal-body').html("");
                            $('.modal-body').append(`<p>${response[key][key2]['strAlcoholic']} drink</p>`);
                            $('.modal-body').append(`<p>Served in ${response[key][key2]['strGlass']}</p>`);
                            $('.modal-body').append('<p>Ingredients:</p>');

                            for (let i = 1; i < 16; i++) {
                                $(`<div class="ingredient${i}">`).remove();
                                if (response[key][key2]['strIngredient' + i] === null) {
                                    break;
                                }
                                $('.modal-body').append(`<div id="${response[key][key2]['strIngredient' + i]}" class="ingredient${i}">`);
                                $('.ingredient' + i).addClass('d-flex mb-3');
                                $('.ingredient' + i).append(`<img src="https://www.thecocktaildb.com/images/ingredients/${response[key][key2]['strIngredient' + i]}-Small.png">`);
                                $('.ingredient' + i).append(`<p><b>${response[key][key2]['strIngredient' + i]}</b></p>`);
                                if (response[key][key2]['strMeasure' + i] === null) {
                                    break;
                                }
                                $('.ingredient' + i).append(`<p>${response[key][key2]['strMeasure' + i]}</p>`);
                            }
                            $('.modal-body').append(`<div>${response[key][key2]['strInstructions']}</div>`);

                        })
                    }

                }
            },
            error: error => console.log(error.name, error.stack, error.message),
        });
    };

    return (
        <>
            <Header/>
            <div className="container-lg main">
                <form id="cocktailSearchForm">
                    <h3>Введите название коктеля на английском.</h3>
                    <p>Например: Vodka, Margarita, Long island</p>
                    <p><b>Нажмите на коктель чтобы узнать рецепт.</b></p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" id="cocktailName" placeholder="Cocktail name!"/>
                        <button className="btn btn-secondary" type="submit" id="button-addon2"
                                onClick={onSubmit}>Search!
                        </button>
                    </div>
                </form>
                <div className="cardHolder d-flex flex-wrap">
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cocktail;