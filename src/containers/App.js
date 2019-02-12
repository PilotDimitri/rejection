import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'
import addQuestion from './AddQuestion'


const { div, pre } = hh(h);


const app = dispatch => state =>
    div([
        addQuestion(state)(dispatch),
        pre({}, JSON.stringify(state, null, 4)),
    ])


export default app
