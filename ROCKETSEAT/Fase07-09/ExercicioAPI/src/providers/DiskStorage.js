const fs = require("fs");//FS é de FILE SYSTEM!!!
const path = require("path");
const uploadConfig = require("../configs/upload");

class DiskStorage{
    async saveFile(file){
        await fs.promises.rename(//rename nao é renomear, é mudar de lugar fazendo rename do path
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        );

        return file;
    }

    async deleteFile(file){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try{
            await fs.promises.stat(filePath);//stat devolve o objeto com o arquivo que está sendo buscado
        } catch{
            return; //nao precisamos de instancia de erro, pois se nao encontrar, o arquivo nao precisa ser deletado
        }

        await fs.promises.unlink(filePath);//unlink serve para deletar
    }
}

module.exports = DiskStorage;