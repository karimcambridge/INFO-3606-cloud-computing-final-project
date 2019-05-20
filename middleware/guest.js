export default function ({ store, redirect }) {
    if (store.state.customAuth.user !== null) {
        return redirect('/')
    }
}
