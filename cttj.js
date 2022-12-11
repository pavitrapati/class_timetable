function disp(){
    var perid=parseInt(document.getElementById('pid').value);
    var t1=[['FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME'],['MLTL-LAB8','MLTL-LAB8','DC-503','MLT-701','AIPT-503','FUNTIME','BAE-AE102'],['SSCDL-LAB3','SSCDL-LAB3','SSCD-601','EMBS-601','DC-503','MLT-701','FUNTIME'],['FUNTIME','FUNTIME','EMBS-601','BAE-AE102','SSCD-601','FUNTIME','FUNTIME'],['EMBS-601','DC-503','AIPT-503','MLT-701','SSCD-601','EMBS-601','FUNTIME'],['SSCD-601','DC-503','MLT-701','AIPT-503','AIPT-503','FUNTIME','BAE-AE102'],['SIKE','SIKE','SIKE','SIKE','SIKE','SIKE','SIKE']];
    var t2=[['FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME'],['FUNTIME','FUNTIME','DC-503','MLT-701','AIPT-503','FUNTIME','BAE-AE102'],['SSCDL-LAB3','SSCDL-LAB3','SSCD-601','EMBS-601','DC-503','MLT-701','FUNTIME'],['MLTL-LAB8','MLTL-LAB8','EMBS-601','BAE-AE102','SSCD-601','FUNTIME','FUNTIME'],['EMBS-601','DC-503','AIPT-503','MLT-701','SSCD-601','EMBS-601','FUNTIME'],['SSCD-601','DC-503','MLT-701','AIPT-503','AIPT-503','FUNTIME','BAE-AE102'],['SIKE','SIKE','SIKE','SIKE','SIKE','SIKE','SIKE']];
    var t3=[['FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME','FUNTIME'],['MLTL-LAB8','MLTL-LAB8','DC-503','MLT-701','AIPT-503','FUNTIME','BAE-AE102'],['SSCDL-LAB3','SSCDL-LAB3','SSCD-601','EMBS-601','DC-503','MLT-701','FUNTIME'],['FUNTIME','FUNTIME','EMBS-601','BAE-AE102','SSCD-601','FUNTIME','FUNTIME'],['EMBS-601','DC-503','AIPT-503','MLT-701','SSCD-601','EMBS-601','FUNTIME'],['SSCD-601','DC-503','MLT-701','AIPT-503','AIPT-503','FUNTIME','BAE-AE102'],['SIKE','SIKE','SIKE','SIKE','SIKE','SIKE','SIKE']];
    var days=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var cdat = new Date();
    var cd=cdat.getDay();
    var uid1=[2017];
    var uid2=[2038,2041,2045];
    var uid3=[1037,1061];
    var mytab='<table><tr><th>HOUR</th><th>'+days[cd]+'</th></tr><tr><td>2</td><td>';
    if (uid1.includes(perid)){
        mytab+=t1[cd][0]+'</td></tr><tr><td>3</td><td>'+t1[cd][1]+'</td></tr><tr><td>4</td><td>'+t1[cd][2]+'</td></tr><tr><td>5</td><td>'+t1[cd][3]+'</td></tr><tr><td>7</td><td>'+t1[cd][4]+'</td></tr><tr><td>8</td><td>'+t1[cd][5]+'</td></tr><tr><td>9</td><td>'+t1[cd][6]+'</td></tr></table>';
    }
    else if(uid2.includes(perid)){
        mytab+=t2[cd][0]+'</td></tr><tr><td>3</td><td>'+t2[cd][1]+'</td></tr><tr><td>4</td><td>'+t2[cd][2]+'</td></tr><tr><td>5</td><td>'+t2[cd][3]+'</td></tr><tr><td>7</td><td>'+t2[cd][4]+'</td></tr><tr><td>8</td><td>'+t2[cd][5]+'</td></tr><tr><td>9</td><td>'+t2[cd][6]+'</td></tr></table>';
    }
    else if(uid3.includes(perid)){
        mytab+=t3[cd][0]+'</td></tr><tr><td>3</td><td>'+t3[cd][1]+'</td></tr><tr><td>4</td><td>'+t3[cd][2]+'</td></tr><tr><td>5</td><td>'+t3[cd][3]+'</td></tr><tr><td>7</td><td>'+t3[cd][4]+'</td></tr><tr><td>8</td><td>'+t3[cd][5]+'</td></tr><tr><td>9</td><td>'+t3[cd][6]+'</td></tr></table>';
    }
    document.getElementById('tab').innerHTML =mytab;
}