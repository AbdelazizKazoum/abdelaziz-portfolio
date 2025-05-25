import { Modal } from "react-responsive-modal";
export const NewsModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : `VS Code Gets New JavaScript Debugger`}</h3>
              <div></div>
            </div>
            <div className="text">
              <p>
                Kura is a leading web design agency with an award-winning design
                team that creates innovative, effective websites that capture
                your brand, improve your conversion rates, and maximize your
                revenue to help grow your business and achieve your goals.
              </p>
              <p>
                In today’s digital world, your website is the first interaction
                consumers have with your business. That's why almost 95 percent
                of a user’s first impression relates to web design. It’s also
                why web design services can have an immense impact on your
                company’s bottom line.
              </p>
              <p>
                That’s why more companies are not only reevaluating their
                website’s design but also partnering with Kura, the web design
                agency that’s driven more than $2.4 billion in revenue for its
                clients. With over 50 web design awards under our belt, we're
                confident we can design a custom website that drives sales for
                your unique business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export const HomeModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : `VS Code Gets New JavaScript Debugger`}</h3>
              <div></div>
            </div>
            <div className="hidden_content">
              <div className="popup_informations">
                <div className="description">
                  <p>
                    Kura is a leading web design agency with an award-winning
                    design team that creates innovative, effective websites that
                    capture your brand, improve your conversion rates, and
                    maximize your revenue to help grow your business and achieve
                    your goals.
                  </p>
                  <p>
                    In today’s digital world, your website is the first
                    interaction consumers have with your business. That's why
                    almost 95 percent of a user’s first impression relates to
                    web design. It’s also why web design services can have an
                    immense impact on your company’s bottom line.
                  </p>
                  <p>
                    That’s why more companies are not only reevaluating their
                    website’s design but also partnering with Kura, the web
                    design agency that’s driven more than $2.4 billion in
                    revenue for its clients. With over 50 web design awards
                    under our belt, we're confident we can design a custom
                    website that drives sales for your unique business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
