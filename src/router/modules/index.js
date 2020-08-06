import Index from "../../components/index/Index";
import Submission from "../../components/submission/Submission";
import Help from "../../components/help/Help";

export default [
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/submission',
        name: 'submission',
        component: Submission,
        meta: {
            title: '提交列表'
        }
    },
    {
        path: '/help',
        name: 'help',
        component: Help,
        meta: {
            title: '帮助'
        }
    },
]
