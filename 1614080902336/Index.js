
 window.onload = function(){  //��ҳ�����֮��̬�¼���

     //�ҵ���Ԫ�ض�������һ���ύ���¼�
     document.getElementById('loginForm').addEventListener("submit",function(e){ //e���ύ�¼�
         console.log(e); //����̨���Դ�ӡ����ǰִ�е��¼�

         //�ҵ�����Ԫ�ض���
         var liuyanObj = document.getElementById("liuyan");

         if (liuyanObj.value == "") {
             alert("����û������������Ϣ���޷����ԣ�");
             if (e && e.preventDefault) { //��������W3C��׼��ִ��
                 e.preventDefault(); //��ֹ������Ķ���
             }else{  //ר�������IE������Ĵ���
                 window.event.returnValue= false;
             }
         }else{  //������ȷ��������Ӧ�ÿ��Խ����ύ
             alert(liuyanObj.value);
             this.submit();
         }
     },false);
 }
 function submit () {
     return false;
 } 