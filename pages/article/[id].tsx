import UserLabel from "@/components/Layout/UserLabel";
import List from "@/components/Article/List";
import Share from "@/components/Layout/Share";
import Section from "@/components/Layout/Section";
import styles from "@/styles/Article/ArticleDetail.module.scss";

const ArticleDetail = () => {
  return (
    <div className={styles.articleDetail}>
      <div className={styles.header}>
        <div className={styles.main}>
          <div>22 April 2022</div>
          <div className={styles.title}>Augue tincidunt vitae vulputate</div>
          <UserLabel />
        </div>
        <div className={styles.side}>
          <div className={styles.cover}></div>
        </div>
      </div>
      <Section>
        <p>
          Lorem ipsum dolor sit amet tortor suspendisse sagittis. Laoreet a cras consequat imperdiet
          congue curabitur nisl enim neque posuere. Dolore eu risus tristique nisi orci habitasse
          turpis at nisi orci eget semper facilisis. Libero molestie odio senectus faucibus lacinia
          laoreet nisl eleifend senectus facilisis ultricies diam. Cras duis facilisis elit aliquet
          volutpat consequat pulvinar.
        </p>
        <p>
          Tempus nullam lacus proin magna cursus dui volutpat labore purus convallis porttitor massa
          eiusmod. Turpis pretium faucibus orci erat tincidunt sed aliquet mauris libero ac ut.
          Incididunt eiusmod consectetur fames laoreet euismod viverra incididunt curabitur quis
          lacinia. Scelerisque egestas labore iaculis odio hendrerit egestas fusce mattis nisi
          nullam etiam platea aenean. Volutpat laoreet senectus ultrices proin integer eget aliquam
          duis fringilla turpis hac interdum posuere.
        </p>
        <p>
          <b>
            Morbi volutpat rhoncus et fermentum ornare in nullam labore massa consectetur mattis id.
            Tellus laoreet semper elementum lectus hendrerit iaculis nisi.
          </b>
        </p>
        <p>
          Sagittis vulputate platea urna hendrerit fermentum ullamcorper quis semper. Mauris netus
          quam odio dui molestie nunc praesent. Morbi volutpat rhoncus et fermentum ornare in nullam
          labore massa consectetur mattis id. Tellus laoreet semper elementum lectus hendrerit
          iaculis nisi.
        </p>

        <p>
          Scelerisque purus urna suspendisse feugiat pellentesque nulla odio lobortis risus. Augue
          morbi etiam tellus fusce pretium diam vitae ac nibh turpis. Mi labore volutpat viverra
          consequat sapien augue cursus ullamcorper. Donec quisque eu netus urna diam dictumst
          nullam maecenas eget. Luctus purus tincidunt nisl ultricies consectetur lacinia arcu enim.
        </p>
      </Section>
      <Section>
        <Share column />
      </Section>
      <hr />
      <Section>
        <List />
      </Section>
    </div>
  );
};

export default ArticleDetail;
