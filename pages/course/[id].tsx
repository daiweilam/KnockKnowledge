import List from "@/components/Course/List";
import Share from "@/components/Layout/Share";
import Video from "@/components/Course/Video";
import PlayList from "@/components/Course/PlayList";
import Price from "@/components/Layout/Price";
import Review from "@/components/Course/Review";
import Info from "@/components/Course/Info";
import Button from "@/components/Layout/Button";
import Icon from "@/components/Layout/Icon";
import styles from "@/styles/Course/CourseDetail.module.scss";

const CourseDetail = () => {
  return (
    <div className={styles.courseDetail}>
      <div className={styles.header}>
        <div className={styles.title}>Lectus tincidunt duis adipiscing</div>
        <Share />
      </div>
      <div className={styles.player}>
        <div className={styles.video}>
          <Video />
        </div>
        <div className={styles.list}>
          <PlayList />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.tab}>
            <div>
              <i className="bx bxs-videos" />
              content
            </div>
            <div>
              <i className="bx bxs-star" />
              review
            </div>
            <div>
              <i className="bx bxs-message-rounded" />
              enquires
            </div>
            <div>
              <i className="bx bxs-book-alt" />
              works
            </div>
          </div>
          <div>
            <p>
              <b>
                Morbi volutpat rhoncus et fermentum ornare in nullam labore massa consectetur mattis
                id. Tellus laoreet semper elementum lectus hendrerit iaculis nisi.
              </b>
            </p>
            <p>
              Lorem ipsum dolor sit amet tortor suspendisse sagittis. Laoreet a cras consequat
              imperdiet congue curabitur nisl enim neque posuere. Dolore eu risus tristique nisi
              orci habitasse turpis at nisi orci eget semper facilisis. Libero molestie odio
              senectus faucibus lacinia laoreet nisl eleifend senectus facilisis ultricies diam.
              Cras duis facilisis elit aliquet volutpat consequat pulvinar.
            </p>
            <p>
              Tempus nullam lacus proin magna cursus dui volutpat labore purus convallis porttitor
              massa eiusmod. Turpis pretium faucibus orci erat tincidunt sed aliquet mauris libero
              ac ut. Incididunt eiusmod consectetur fames laoreet euismod viverra incididunt
              curabitur quis lacinia. Scelerisque egestas labore iaculis odio hendrerit egestas
              fusce mattis nisi nullam etiam platea aenean. Volutpat laoreet senectus ultrices proin
              integer eget aliquam duis fringilla turpis hac interdum posuere.
            </p>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.card}>
            <Price>HKD$500.0</Price>
            <Review />
            <Info>
              <span>10 videos</span>
              <span>2h 30m</span>
              <span>100 classmates</span>
            </Info>
            <Button>add to cart</Button>
          </div>
        </div>
      </div>
      <div className={styles.teacher}>
        <div className={styles.title}>
          <div>About Teacher</div>
          <div>John Doe</div>
        </div>
        <div className={styles.content}>
          <div>
            <Icon />
          </div>
          <div className={styles.des}>
            Lorem ipsum dolor sit amet arcu duis integer. Blandit erat turpis luctus scelerisque sed
            iaculis euismod sodales volutpat condimentum dictum curabitur aliquam.
          </div>
        </div>
      </div>
      <List />
    </div>
  );
};

export default CourseDetail;
