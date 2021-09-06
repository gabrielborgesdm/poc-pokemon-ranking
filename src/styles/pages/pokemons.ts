import { Col, Popover, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const CustomPokemonContainer = styled(Col)`
  overflow-x: auto;

  @media (min-width: 768px) and (max-width: 846px), (max-width: 346px) {
    img {
      display: none !important;
    }
  }
  
  .container-name {
    width: 10%;
    
  }

  .container-name span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
`

export const CustomPokemonBox = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  height: 110px;
  padding: 0 10px;
  border-radius: 3px;
  position: relative;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`

export const CustomPokemonBoxTitle = styled.span`
  margin-left: 10px;
  font-size: 1.1rem;
`
export const CustomPokemonToolsBox = styled.div`
  position: absolute;
  z-index: 100;
  top: 15px;
  right: 15px;
`
export const CustomPokemonPopover = styled(Popover)`
  width: 400px;
`
