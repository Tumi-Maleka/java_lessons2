import java.util.ArrayList;
import java.util.List;

class Practice4{
  
  public static void main(String[] args){
     
     List<Integer> list = new ArrayList<>();
     list.add(21);
     list.add(13);
     list.add(30);
     list.add(11);
     list.add(2);

     list.remove(0);
     System.out.println(list);
  	
  }

}

