
window.onload = function(){  //��ҳ�����֮��̬�¼���

    //�ҵ���Ԫ�ض�������һ���ύ���¼�
    document.getElementById('loginForm').addEventListener("submit",function(e){ //e���ύ�¼�
        console.log(e); //����̨���Դ�ӡ����ǰִ�е��¼�

        //�ҵ�����Ԫ�ض���
        var liuyanObj = document.getElementById("liuyan");

        //ȡ������ֵ
        // alert(liuyanObj.value);
        if (liuyanObj.value == "") {
            alert("����û�������������ݣ��޷����ͣ�");
            if (e && e.preventDefault) { //��������W3C��׼��ִ��
                e.preventDefault(); //��ֹ������Ķ���
            }else{  //ר�������IE������Ĵ���
                window.event.returnValue= false;
            }
        }else{//������ȷ��������Ӧ�ÿ��Խ����ύ
            if(confirm("��Ҫ�ύ�������� "+messObj.value)) {
                this.submit(); //��ǰԪ���ύ��
            }
            else{
                if (e && e.preventDefault) { //��������W3C��׼��ִ��
                    e.preventDefault(); //��ֹ������Ķ���
                }else{  //ר�������IE������Ĵ���
                    window.event.returnValue= false;
                    }
                }
            }
        },false);
    }
function submit () {
    return false;
}
