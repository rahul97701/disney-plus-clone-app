import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/4k-marvel-avengers.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/themarvels.jpg" />
      </ImageTitle>
      <Controls>
           <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
           </PlayButton>
           <TrailerButton>
           <img src="/images/play-icon-white.png" />
           <span>Trailer</span>
           </TrailerButton>
           <AddButton>
            <span>+</span>
           </AddButton>
           <GroupWatchButton>
             <img src="/images/group-icon.png" />
           </GroupWatchButton>
           </Controls>
           <SubTitle>
               2023 * 1h 44m * 4 Languages * U/A 13+
           </SubTitle>
           <Description>
             Captain Marvel joins forces with her estranged niece, 
             <br></br>
             astronaut Captain Monica Rambeau and super-fan Kamala Khan, aka Ms. Marvel to save the universe.
           </Description>
      </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;

img {
width: 100%;
height: 100%;
object-fit: fill;
}
`

const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;

img {
width: 100%;
height: 100%
object-fit: cover;
padding-top: 40px;
padding-right: 12px
}
`
const Controls = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.div`
 border-radius: 4px;
 font-size: 15px;
 padding: 0px 24px;
 margin-right: 22px;
 display: flex;
 align-items: center;
 height: 56px;
 background: rgb(249, 249, 249);
 border: none;
 letter-spacing: 1.8px;
 cursor: pointer;
 color: black;

 &:hover {
  background: rgb(198, 198, 198);
 }
`

const TrailerButton = styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgba(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`

const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;

span {
font-size: 30px;
color: white;
}

`

const GroupWatchButton = styled(AddButton)`
 background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px solid;
min-height: 2px;
margin-top: 20px;
letter-spacing: 2px
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px ;
margin-top: 16px;
color: rgb(249, 249, 249);
`
