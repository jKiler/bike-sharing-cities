import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import removeAccents from 'remove-accents';
import styled, { keyframes } from 'styled-components';
import { Row } from 'react-styled-flexboxgrid';
import algoliaLogo from '../assetes/algolia.svg';

const fixName = name => (
  removeAccents(name)
    .split(' ')
    .join('-')
    .toLowerCase()
);

const Algolia = styled.img`
  left: 50%;
  max-width: 150px;
  width: 40%;
  position: absolute;
  bottom: 30px;
  transform: translateX(-50%);
  cursor: pointer;
`;

const spin = keyframes`
  from   { 
    transform: rotate(0deg);
  }
  to { 
    transform: rotate(360deg); 
  }
`;

const Bike = styled.svg`
  height: 150px;
  position: relative;
  top: 30px;
  @media (max-width: 360px) {
    max-width: 100px;
  }
  #wheels {
    transform-origin: 194.61px 372.33px;
    animation: 2s ${spin} infinite linear;
  }
  #wheels-2 {
    transform-origin: 767.43px 372.33px;
    animation: 2s ${spin} infinite linear;
  }
`;

const Form = styled.form`
  display: inline;
`;

const Input = styled.input.attrs({
  type: 'text',
  id: 'ct'
})`
  border: none;
  border-bottom: 1px solid ${props => props.theme.secondary};
  background: transparent;
  font-size: 80px;
  height: 80px;
  width: 300px;
  color: ${props => props.theme.secondary};
  outline: none;
  padding: 0 10px;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: bold;
  &:hover,
  &:active {
    outline: none;
  }
  @media (max-width: 1030px) {
    font-size: 55px;
    height: 55px;
  }
  @media (max-width: 435px) {
    font-size: 40px;
    height: 40px;
    margin-top: 20px;
  }
  @media (max-width: 360px) {
    font-size: 30px;
    height: 35px;
    margin-top: 10px;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 80px;
`;

const Wrapper = styled(Row)`
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  @media (max-width: 767px) and (max-height: 400px) {
    flex-direction: row;
  }
  @media (max-width: 360px) {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }
`;

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
      value: '',
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ fireRedirect: true});
  }

  render(){
    const { fireRedirect, value } = this.state;
    return (
      <Wrapper>
        <Bike id="bike" viewBox="0 0 943.48 559.82" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><defs><style>{`.cls-1,.cls-10,.cls-12,.cls-13,.cls-2,.cls-3,.cls-5,.cls-7,.cls-8,.cls-9{fill:none;}.cls-1{stroke:#d1d3d4;stroke-linecap:round;stroke-width:15px;}.cls-1,.cls-10,.cls-11,.cls-12,.cls-13,.cls-2,.cls-3,.cls-4,.cls-5,.cls-7,.cls-8,.cls-9{stroke-miterlimit:10;}.cls-10,.cls-11,.cls-12,.cls-13,.cls-2,.cls-3,.cls-4,.cls-5,.cls-7,.cls-8,.cls-9{stroke:#e8eaf6;}.cls-2{stroke-width:26.61px;}.cls-3{stroke-width:6.23px;}.cls-11,.cls-4{fill:#e6e7e8;}.cls-4,.cls-7{stroke-width:3px;}.cls-5{stroke-width:2px;}.cls-6{fill:#e8eaf6;}.cls-8{stroke-width:7px;}.cls-9{stroke-width:14px;}.cls-10{stroke-width:17px;}.cls-11,.cls-13{stroke-width:5px;}.cls-12{stroke-width:5.07px;`}</style></defs><title>bicycle</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><g id="wheels"><circle className="cls-2" cx="194.61" cy="372.33" r="162.74"/><circle className="cls-3" cx="194.61" cy="372.33" r="141.74"/><circle className="cls-4" cx="194.61" cy="372.33" r="40.5"/><line className="cls-5" x1="235.01" y1="369.66" x2="336.35" y2="369.66"/><line className="cls-5" x1="194.61" y1="412.83" x2="194.61" y2="511.4"/><line className="cls-5" x1="298.17" y1="274.43" x2="223.1" y2="343.56"/><line className="cls-5" x1="224.53" y1="397.46" x2="300.11" y2="464.31"/><line className="cls-5" x1="87.78" y1="276.5" x2="164.76" y2="344.58"/><line className="cls-5" x1="89.72" y1="466.38" x2="163.59" y2="398.36"/><line className="cls-5" x1="52.86" y1="369.66" x2="154.11" y2="369.66"/><line className="cls-5" x1="194.61" y1="230.59" x2="194.61" y2="331.83"/></g><circle className="cls-6" cx="194.61" cy="372.33" r="7.5"/><circle className="cls-7" cx="415.09" cy="379.83" r="43.5"/><circle className="cls-7" cx="415.09" cy="379.83" r="35.25"/><circle className="cls-7" cx="415.09" cy="379.83" r="24.92"/><circle className="cls-6" cx="415.09" cy="379.83" r="17.62"/><path className="cls-6" d="M451.51,356.63l47-14.3s9.5,3.44,6.5,13.72l-46.44,23.78S459.91,362.48,451.51,356.63Z"/><path className="cls-6" d="M358.17,32.28s-4.33-2.56-66.67,1.67c0,0-38-2.22-47.12-1.32-1.17.12-10.65,5.55-.88,12.69,8.14,5.94,33,16.3,40,13.63,0,0,95.33-13.33,95.33-16S378.52,32.33,358.17,32.28Z"/><polyline className="cls-8" points="267.83 50.94 279.5 64.94 319.5 61.28 339.5 45.44"/><rect className="cls-6" x="292.91" y="63.32" width="30.47" height="14.34" rx="6.27" ry="6.27" transform="translate(-6.32 38.3) rotate(-7.04)"/><line className="cls-9" x1="313.74" y1="70.49" x2="415.09" y2="379.83"/><line className="cls-9" x1="625.69" y1="80.61" x2="353.13" y2="190.73"/><line className="cls-9" x1="415.09" y1="379.83" x2="643.08" y2="111.34"/><line className="cls-9" x1="617.58" y1="59.37" x2="667.46" y2="160.58"/><line className="cls-9" x1="767.43" y1="372.33" x2="660.96" y2="146.83"/><rect className="cls-6" x="602.6" y="33.11" width="24.34" height="31.92" rx="10.75" ry="10.75" transform="matrix(0.96, -0.27, 0.27, 0.96, 9.22, 165.97)"/><line className="cls-10" x1="614.77" y1="49.07" x2="642.52" y2="33.61"/><rect className="cls-6" x="639.5" y="11.97" width="29.95" height="29.95" rx="12.12" ry="12.12" transform="translate(51.14 282) rotate(-25.27)"/><rect className="cls-6" x="606.5" y="5.11" width="51" height="17.5" rx="8.75" ry="8.75" transform="translate(34.38 -192.22) rotate(17.77)"/><circle className="cls-11" cx="198" cy="436.61" r="14.6"/><g id="wheels-2" data-name="wheels"><circle className="cls-2" cx="767.43" cy="372.33" r="162.74"/><circle className="cls-6" cx="767.43" cy="372.33" r="18"/><circle className="cls-4" cx="767.43" cy="372.33" r="40.5"/><circle className="cls-6" cx="767.43" cy="372.33" r="6.97"/><circle className="cls-3" cx="767.43" cy="372.33" r="141.74"/><line className="cls-5" x1="807.83" y1="371" x2="909.17" y2="371"/><line className="cls-5" x1="767.43" y1="414.17" x2="767.43" y2="512.74"/><line className="cls-5" x1="871" y1="275.76" x2="795.92" y2="344.89"/><line className="cls-5" x1="797.36" y1="398.79" x2="872.93" y2="465.64"/><line className="cls-5" x1="660.61" y1="277.83" x2="737.58" y2="345.92"/><line className="cls-5" x1="662.54" y1="467.71" x2="736.41" y2="399.69"/><line className="cls-5" x1="625.69" y1="371" x2="726.93" y2="371"/><line className="cls-5" x1="767.43" y1="231.93" x2="767.43" y2="333.17"/></g><line className="cls-9" x1="194.61" y1="367.61" x2="353.13" y2="190.73"/><line className="cls-9" x1="194.75" y1="369.67" x2="415.24" y2="381.95"/><path className="cls-12" d="M203.42,361.9,397.7,334.84s50.37-10.69,61.69,31.14c9.77,36.11-19.44,54.63-28.25,59.83a94.17,94.17,0,0,1-11.62,4c-22.39,4.16-209,30.33-221.52,21.44"/><circle className="cls-6" cx="197.55" cy="366.76" r="9.95"/><line className="cls-13" x1="225.99" y1="371.41" x2="194.61" y2="423.33"/></g></g></Bike>
        <Title>
          Is there bike sharing in
          <Form onSubmit={this.handleSubmit}>
            <Input value={value} onChange={this.handleChange} />
          </Form>?
        </Title>
        <a href="https://www.algolia.com" target="_blank" rel="noopener noreferrer">
          <Algolia src={algoliaLogo} alt="Algolia Search Logo"/>
        </a>
        {fireRedirect && (
          <Redirect to={`/bike-sharing-cities/${fixName(value)}`}/>
        )}
      </Wrapper>
    );
  }
}