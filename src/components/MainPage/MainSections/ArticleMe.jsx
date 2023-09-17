import CardArticle from "./components/CartArticle";

function ArticleMe({ refArticle }) {
    return (
        <section ref={refArticle}>
            <h1 className="title-head" >آخرین مقالات</h1>
            <article className="row-item">
                {
                    [...Array(3)].map(item => {
                        return (
                            <CardArticle/>
                        )
                    })
                }
            </article>

        </section>
    );
}

export default ArticleMe;


