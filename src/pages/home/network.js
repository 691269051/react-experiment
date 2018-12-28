export async function get() {
    // try {
    let response = await fetch('/demo/test2ss').then(response => {
        let { status } = response
        console.log(status)

        return response
    })
    let data = await response.text()
    console.log(data)
    // } catch (error) {
    //     console.log(error)
    // }
}
