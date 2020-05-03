import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import React from 'react'
import './list.css'
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items: ['hello', 'world', 'click', 'me'] }
        this.handleAdd = this.handleAdd.bind(this)
    }
    /**
  * 我们要注意：在css中和在CSSTransitionGroup组件中都需要指定animationDuration
  * 这告诉React什么时候从该元素上移除相应的类
  *
  /**
   * 添加一个元素
   */
    handleAdd() {
        const newItems = this.state.items.concat([
            window.prompt('Enter some text'),
        ])
        this.setState({ items: newItems })
    }

    /**
     * 移除某一个元素。然后导致我们的组件reRender,对于我们要移除的那个DOM，我们会
     * 首先添加example-enter和example-enter-active。这是通过我们的key来判断的
     */
    handleRemove(i) {
        let newItems = this.state.items.slice()
        newItems.splice(i, 1)
        this.setState({ items: newItems })
    }

    /**
     * 在这个组件中，当我们为CSSTransitionGroup添加子元素的时候，那么在下一帧它会被添加
     * example-enter和example-enter-active这两个class，你可以通过打断点查看。这是基于我们
     * 指定的transitionName属性来判断的。
     */
    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ))

        // console.log(items)
        return (
            <div>
                {/* <style dangerouslySetInnerHTML={{ __html: this.getCssClss() }} /> */}
                <button onClick={this.handleAdd}>Add Item</button>
                <div className="divs" />
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionAppearTimeout={500}
                >
                    {items}
                </CSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        count: state.count,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        addOne: () => {
            dispatch.count.add(1)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

// export default List;
