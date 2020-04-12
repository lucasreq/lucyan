import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class Home extends Component {
  render() {
    return (
      <ContentHome className="col-5 mx-auto col-md-6 col-lg-auto my-auto blockquote">
        <Tabs defaultActiveKey="Notre atelier" id="uncontrolled-tab-example">
          <Tab eventKey="Notre atelier" title="Notre atelier">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis tellus vitae massa finibus aliquet. Suspendisse faucibus, odio a eleifend suscipit, justo nunc tempor diam, id venenatis dui purus iaculis magna. Phasellus venenatis, dui eget finibus auctor, libero augue ornare sem, at tristique leo lorem ac turpis. Morbi efficitur scelerisque iaculis. Suspendisse eget sagittis turpis, vitae pulvinar ligula. Sed magna magna, convallis quis odio vitae, condimentum aliquam mi. Nullam turpis velit, interdum ut scelerisque et, suscipit sed nunc. Integer at semper risus, sed laoreet quam. In pulvinar lacinia ante ac imperdiet.</h3>
            <h3>Proin enim turpis, ultricies at tempus vel, convallis ac lorem. Proin laoreet lectus sit amet volutpat pretium. Suspendisse cursus feugiat neque, at semper justo malesuada sit amet. Morbi erat elit, vestibulum nec metus at, imperdiet porta nunc. Sed molestie justo id nisi laoreet tempus. Phasellus feugiat sollicitudin accumsan. Cras at quam a ipsum tincidunt lacinia. Mauris sagittis interdum vehicula. Phasellus suscipit varius velit sit amet eleifend. Vestibulum tempor nunc accumsan quam tincidunt dictum. Curabitur ut diam pharetra, congue diam id, faucibus risus. Nulla euismod augue a purus gravida, elementum tempus felis sollicitudin. Ut in nunc rutrum, pretium tortor eu, laoreet mauris. Praesent aliquet consectetur est, eget gravida orci pulvinar vel.</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlLNsZdEWgxe8XtZRGVqj1cbHAM8JU71hCKW_4_Al9lsBen_dm&usqp=CAU" />
          </Tab>
          <Tab eventKey="Les sacs" title="Les sacs">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis tellus vitae massa finibus aliquet. Suspendisse faucibus, odio a eleifend suscipit, justo nunc tempor diam, id venenatis dui purus iaculis magna. Phasellus venenatis, dui eget finibus auctor, libero augue ornare sem, at tristique leo lorem ac turpis. Morbi efficitur scelerisque iaculis. Suspendisse eget sagittis turpis, vitae pulvinar ligula. Sed magna magna, convallis quis odio vitae, condimentum aliquam mi. Nullam turpis velit, interdum ut scelerisque et, suscipit sed nunc. Integer at semper risus, sed laoreet quam. In pulvinar lacinia ante ac imperdiet.</h3>
            <h3>Proin enim turpis, ultricies at tempus vel, convallis ac lorem. Proin laoreet lectus sit amet volutpat pretium. Suspendisse cursus feugiat neque, at semper justo malesuada sit amet. Morbi erat elit, vestibulum nec metus at, imperdiet porta nunc. Sed molestie justo id nisi laoreet tempus. Phasellus feugiat sollicitudin accumsan. Cras at quam a ipsum tincidunt lacinia. Mauris sagittis interdum vehicula. Phasellus suscipit varius velit sit amet eleifend. Vestibulum tempor nunc accumsan quam tincidunt dictum. Curabitur ut diam pharetra, congue diam id, faucibus risus. Nulla euismod augue a purus gravida, elementum tempus felis sollicitudin. Ut in nunc rutrum, pretium tortor eu, laoreet mauris. Praesent aliquet consectetur est, eget gravida orci pulvinar vel.</h3>
            <img src="https://www.tenuecomplete.com/42228-large_default/sac-de-plage-anses-en-corde-epaisse-100-coton-canvas-407-g-m.jpg"/>
            <img src="https://images-na.ssl-images-amazon.com/images/I/61V4%2BAqIJ9L._AC_UX385_.jpg"/>
            <img src="https://images.fr.shopping.rakuten.com/photo/1220573073_ML.jpg"/>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <h3>Vous pouvez nous contactez a l'addresse :</h3> <span>Lucyan@gmail.com</span>
          </Tab>
        </Tabs>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">test</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">€</span>
            test
          </h5>
        </div>
      </ContentHome>
    );
  }
}

const ContentHome = styled.div`

.card {
    border-color: transparent;
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    background: rgba(247, 247, 247);
  }
`
const ProductWrapper = styled.div`
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.3s linear;
    opacity: 0.5;
    
  }
  &:hover {
      .card-img-top{
        opacity: 1;
      }
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
  }
`;
