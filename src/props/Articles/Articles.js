import '../Articles/Articles.scss';

const ArticleProp = (props) =>{
    
    const{ p1="", fp1="",fp2="", sp1="", sp2="",BigPic="", SPic1="",SPic2=""}=props;

    return(
        <div className='ArticlePropWrapper'>
            <div className='ArticlePropContainer'>
                <div className='ArticlePropHead'>
                    <p className='p1'>{p1}</p>
                    <div className='BigPic HeadBigPic'>{BigPic}</div>
                </div>
                <div className='ArticlePropFoot'>
                    <div className='ArticlePropFootPics1'>
                        <div className='ArticlePropFootPicsFirst FootPic'>{SPic1}</div>
                        <p className='ArticlePropFootPicsFirstText'>{fp1}<br/>{fp2}</p>
                    </div>
                    <div className='ArticlePropFootPics2'>
                        <div className='ArticlePropFootPicsSecond FootPic'>{SPic2}</div>
                        <p className='ArticlePropFootPicsSecondText'>{sp1}<br/>{sp2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ArticleProp;