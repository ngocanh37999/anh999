import Desktop from 'src/components/Responsive/Desktop'
import Mobile from 'src/components/Responsive/Mobile'
import Tablet from 'src/components/Responsive/Tablet'
import SortBar from 'src/components/SortBar/SortBar'
export default function Home() {
  return (
    <>
      <Mobile>
        <SortBar />
      </Mobile>

      <Tablet>
        <SortBar />
      </Tablet>

      <div className="container">
        <Desktop>
          <SortBar />
        </Desktop>
      </div>
    </>
  )
}
