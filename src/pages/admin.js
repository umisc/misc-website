import React from 'react'

class AdminPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { val: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return (
            <>
                <center>
                    <h1 style={{ marginTop: '50px' }}>Top Secret Admin Panel</h1>
                    <div style={{ width: '600px' }}>
                        Checking <code>/admin</code> is generally a good idea (but I hope you did not dirbust for this)! Unfortunately, there isn't going to be any admin-y stuff here, but have a poke around a bit more and you might find a flag!

                        <form style={{ marginTop: '120px', opacity: '0' }} onSubmit={this.handleSubmit}>
                            <input type="text" name="flag" onChange={this.handleChange}/>
                        </form>
                    </div>
                </center>
            </>
        )
    }

    handleChange(e) {
        this.setState({ val: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        let { val } = this.state
        if(xor(val, '5d41402abc4b2a76b9719d911017c592 ') == 'x-grcup"6%O\u0016Z\bDi\u000bJhPf\u0017MPEYRh\u0010\\MW]') {
            alert('Good job that is correct, the flag is indeed ' + val)
        } else {
            alert('nope, sorry!')
        }
    }

} 

function xor(s1, s2) {
    var l = Math.max(s1.length, s2.length)
    var o = ''
    for(var i = 0; i < l; i++) {
        o += String.fromCharCode(s1.charCodeAt(i) ^ s2.charCodeAt(i))
    }
    return o
}

export default AdminPage
