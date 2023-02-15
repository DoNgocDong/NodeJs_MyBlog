
class NewsController {
    // GET  /news
    index(req, res) {
        res.render('news');
    }

    // GET /:course
    course(req, res) {
        res.send('course');
    }
}

export default new NewsController;