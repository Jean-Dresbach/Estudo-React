import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  padding: 0 10vw;
`

export const ContainerInfo = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 32.5px;
  }

  .nav-after {
    position: relative;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: normal;

    &:not(:last-child):after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      right: 0;

      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.text};

      transform: translate(18px, 10px);
    }
  }

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ContainerSocialIcons = styled.div`
  display: flex;
  gap: 30px;

  img {
    width: 30px;
  }
`
