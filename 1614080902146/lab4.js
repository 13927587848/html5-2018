window.onload = function(){  //��ҳ�����֮��̬�¼���

  //�ҵ���Ԫ�ض�������һ���ύ���¼�
  document.getElementById('mBoard').addEventListener("submit",function(e){
    console.log(e); //����̨���Դ�ӡ����ǰִ�е��¼�
    //�ҵ��ʼ�Ԫ�ض���
    var messObj = document.getElementById("leaveM");
    //ȡ������ֵ
    // alert(emailObj.value);
    if (messObj.value == "") {
      alert("����û�������������ݣ�");
      if (e && e.preventDefault) { //��������W3C��׼��ִ��
        e.preventDefault(); //��ֹ������Ķ���
      }else{  //ר�������IE������Ĵ���
        window.event.returnValue= false;
      }
    }else{  //������ȷ��������Ӧ�ÿ��Խ����ύ
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
function submit() {
  return false;
}