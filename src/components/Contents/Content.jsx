import Tags from "../Tags/Tags"
import "./ContentStyle.css"

function Content() {
  return (
    <section id="content">
      <Tags/>
      <section id="the-cards">
        <div className="card">
            <div className="-thumb">
                <img src="https://via.placeholder.com/480x270" />
            </div>
            <div className="-about">
                <div className="-channel-img">
                    <img src="https://via.placeholder.com/36x36" />
                </div>
                <div className="-detail">
                    <div className="-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem expedita beatae tempora quisquam nostrum cupiditate laudantium consequuntur. Laborum hic pariatur voluptatem? Natus, architecto suscipit dolorum sunt omnis hic iure.</div>
                    <div className="-channel">BigZeuS</div>
                    <div className="-view">การดู 4.2 แสนครั้ง / 4 เดือนที่ผ่านมา</div>
                </div>
            </div>
        </div>

      </section>
    </section>
  )
}

export default Content
