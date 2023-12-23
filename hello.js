/**
 * permet de savoir si l'utilisateur peut conduire 
 * permet de te dire que je vais te donner des information 
 * @param {number} age 
 * @param {string} country  code pays sur 2 caractère
 * @returns {boolean}
 */


function canDrave(age, country) {
    if (age >= 18){
        return true
    } else if (country === 'US' && age >= 18) {
        return true
    }
    return false
}
function isMajeur(age) {
    return age >=18
}

/**
 * @return {{id: number , title: string, body: string }}
 */
function fetchPost() {
    
}

const a = canDrave(18, 'FR')