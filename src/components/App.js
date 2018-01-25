import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import articles from '../fixtures'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Counter />
                <Filters articles = {articles}/>
                <ArticleList articles = {articles} defaultOpenItemId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}
export default App