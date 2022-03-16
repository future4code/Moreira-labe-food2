export const goToLogin = (navigate) => {
    navigate("/login")
}
export const goToFeed = (navigate) => {
    navigate("/restaurantes")
}
export const goToResult = (navigate, id) => {
    navigate(`/restaurantes/${id}`)
}
export const goToAdress = (navigate) => {
    navigate("/cadastro-endereco")
}
export const goToCar = (navigate) => {
    navigate("/carrinho")
}
export const goToProfile = (navigate) => {
    navigate("/perfil")
}
export const goToEdit = (navigate) => {
    navigate("/edicao-cadastro")
}
export const goToSearch = (navigate) => {
    navigate("/busca")
}
export const goToSingUp = (navigate) => {
    navigate("/cadastro")
}