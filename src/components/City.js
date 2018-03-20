import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import algoliasearch from 'algoliasearch';
import styled from 'styled-components';
import { Row } from 'react-styled-flexboxgrid';
import Spinner from '../assetes/Spinner';

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const GoBack = styled(Link)`
  color: ${props => props.theme.secondary};
  z-index: 99;
  width: 100%;
  text-align: center;
  font-size: 24px;
  text-decoration: none;
  position: absolute;
  bottom: 20px;
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 40px;
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

export default class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      loaded: false,
    }
  }

  componentDidMount() {
    const { city } = this.props.match.params;

    const client = algoliasearch(
      'Y9XV79EEV7',
      'b40275268ed7fdda9c1e2f202b198cfc'
    );
    const index = client.initIndex('cities');

    if (city.length > 3) {
      index.search(city, (err, content) => {
        if (err) {
          this.setState({
            loaded: true,
          })
          console.log(err)
          return
        }

        this.setState({
          cities: content.hits,
          loaded: true,
        })
      })
    } else {
      this.setState({
        loaded: true,
      })
    }
  }

  render(){
    const { cities, loaded } = this.state;

    if (loaded) {
      return(
        <Wrapper>
          <Flex>
          {loaded && cities.length === 1 ? (
            <Fragment>
              <Title>YES <span role="img" aria-label="emoji">🚴</span></Title>
              <Subtitle>
                For more details visit this page:
                <a href={cities[0].link} target="_blank" rel="noopener noreferrer">{cities[0].link}</a>
              </Subtitle>
              {console.log(this.state.cities)}
            </Fragment>
          ) : (
            <Fragment>
              <Title>NO <span role="img" aria-label="emoji">😕</span></Title>
              {console.log(this.state.cities)}
            </Fragment>
          )}
            <GoBack to="/bike-sharing-cities">Search again</GoBack>
          </Flex>
        </Wrapper>
      );
    }

    if (!loaded) {
      return (
        <Flex>
          <Spinner color="black" />
        </Flex>
      );
    }
  }
}