package home;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Random;
import java.util.TreeMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;







public class Morning {

	 static Logger log = LogManager.getLogger(Morning.class.getName());
	
	   public String getTime()
	   {
	      int day, month, year;
	      int second, minute, hour, milsec;
	      GregorianCalendar date = new GregorianCalendar();
	 
	      day = date.get(Calendar.DAY_OF_MONTH);
	      month = date.get(Calendar.MONTH);
	      year = date.get(Calendar.YEAR);
	 
	      second = date.get(Calendar.SECOND);
	      minute = date.get(Calendar.MINUTE);
	      hour = date.get(Calendar.HOUR);
	      milsec=date.get(Calendar.MILLISECOND);
	      return year+"-"+(month+1)+"-"+String.format("%02d", day)+" "+hour+":"+minute+":"+second+"."+String.format("%03d", milsec);
	   }
	public void greetingString(){
		  BufferedReader br;
		  TreeMap<Integer, String> ht_greeting=new TreeMap<Integer, String>();
		try {
			br = new BufferedReader(new FileReader("config/greeting.txt"));
		        StringBuilder sb = new StringBuilder();
		        String line = br.readLine();
		        while (line != null) {
		        	ht_greeting.put(ht_greeting.size(), line);
		            line = br.readLine();
		        }
		        Random random=new Random();
		        String msg=ht_greeting.get(random.nextInt(ht_greeting.size()));
		        //System.out.println(msg);
		        log.info(msg); 
		        //log.debug(msg);
		       //log.error(msg);

		        } catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Morning m=new Morning();
		//m.showTime();
		m.greetingString();
		m.greetingString();
		m.greetingString();
	}

}
