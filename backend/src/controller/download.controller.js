import {instagramGetUrl} from 'instagram-url-direct';

export const download = async (req, res) => {
    console.log(req.method, req.url);
    try {
        const {url} = req.body;
        if(!url){
            return res.status(400).json({
                message:'url is required !'
            })
        }

        const reel = await instagramGetUrl(url);
        const result = reel?.url_list[0];


        if(!result){
            return res.status(404).json({
                message:'video not found !'
            })
        }

        return res.status(200).json({
            message:'Download link fetched successfully',
            videoUrl:result
        })

    }catch (error){
        console.log(error.message);
        return res.status(500).json({
            message:'something went wrong !'
        })
    }
}