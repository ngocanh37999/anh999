import styled from 'styled-components'

export const Header = styled.div`
  background-color: #fff;
  padding: 0.2rem 0.5rem 0;
  display: flex;
  flex-direction: row;
  flex: auto;
  justify-content: space-between;
  position: sticky;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px #8d949e;
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0.3;
`
export const Logo = styled.img`
  height: 40px;
`
export const SearchInput = styled.div`
  margin: 0 0.4rem;
  display: flex;
  background-color: $comment-background;
  padding: 0.2rem;
  border-radius: 3rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .searchIcon {
    color: #65676b;
    margin-left: 0.5rem;
  }
  .inputBar {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0.4rem;
    color: #65676b;
  }
`

export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 0.55;
`
export const ActiveOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 3rem;
  cursor: pointer;
  border-bottom: 4px solid #2d88ff;
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 3rem;
  border-radius: 0.4rem;
  transition: linear 200ms;
  &:hover {
    cursor: pointer;
    background-color: $button-hover;
    transform: translateY(-1.5px);
    .icon {
      color: $primary;
    }
  }

  .icon {
    color: #4a4a4a;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0.3;
  justify-content: flex-end;

  button {
    background-color: #e4e6eb;
    color: $button-icon;
    margin: 0 0.3rem;
    transition: linear 200ms;

    &:hover {
      background-color: #dadde1;
      transform: translateY(-2px);
    }
  }
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  h4 {
    margin-left: 0.5rem;
  }
`
