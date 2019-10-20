import axios from 'axios';

// class Github {
//    static getRepositories(repo) {
//        axios.get(`https://api.github.com/repos/${repo}`)
//        .then(response => {
//        console.log(response.data);
//        })
//        .catch(err => {
//        console.log('Repositório não existe');
//        })
//    }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
        
            console.log(response);
        } catch(err)  {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/omni-cli-server-express');
Github.getRepositories('rocketseat/dslkvmskv');