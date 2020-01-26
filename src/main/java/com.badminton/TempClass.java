package com.badminton;

import com.badminton.Servlets.Scheduler;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TempClass {

    public static void main(String args[]) throws ParseException {

        TournamentDatabase db = new TournamentDatabase();
        //PlayerDB pdb = new PlayerDB();
        //pdb.updatePlayerPoints("shiva",3);
        db.getliveScore();

        //db.getJoined("spriya@a");
      //  db.updateTeamPoints("purple",3," summer");

      //  SchedulerLogic sl = new SchedulerLogic();
        //sl.createMatches("2020/12/10",3,2,"pramati");
        /*
        SchedulerLogic sl = new SchedulerLogic();
      //  sl.createMatches();
        String dt = "2020/02/11";
        Date date=new SimpleDateFormat("yyyy/MM/dd").parse(dt);
        System.out.println(date);

        DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        String testDateString = df.format(date);
        System.out.println("String in dd/MM/yyyy format is: " + testDateString);

x
         */

        /*
        String dt = "2008-01-01";  // Start date
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar c = Calendar.getInstance();
        c.setTime(sdf.parse(dt));
        c.add(Calendar.DATE, 1);  // number of days to add
        dt = sdf.format(c.getTime());

        System.out.println(dt);


         */
    }
}
