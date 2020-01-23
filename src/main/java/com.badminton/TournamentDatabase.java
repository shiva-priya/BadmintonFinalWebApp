package com.badminton;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class TournamentDatabase {
    Database db = new Database();
    Statement stmt;
    public TournamentDatabase(){ stmt = db.dbConnection();}

    public void createTournament(String name,String wPrize,String rPrize,String loc,String email){
        PlayerDB pdb = new PlayerDB();
        String id = pdb.empIdOfPlayer(email);

            try {
                String query = "insert into tourmentable(name,winPrize,runPrize,location,empId) values('" + name + "','" + wPrize + "','" + rPrize + "','" + loc + "','"+id+"') ;";
                System.out.println(query);
                int k  = stmt.executeUpdate(query);
                System.out.println(k);
            }catch (SQLException s){
                s.printStackTrace();
            }

    }

    public String empIdOfTour(String email){
        PlayerDB pdb = new PlayerDB();
        String id = pdb.empIdOfPlayer(email);
        try{
            String query = "select name from tournamentable where empId = '"+id+"' ;";
            ResultSet rs = stmt.executeQuery(query);
            return rs.getString("name");
        } catch (SQLException e) {
            e.printStackTrace();
            return "";
        }
    }

    public ResultSet getAll(){
        try{
            String query = "select * from tourmentable";
            return stmt.executeQuery(query);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public ResultSet getJoined(String email)
    {
        String query = "select distinct trnName from RegisteredTournaments where email ='"+email+"';";
        try
        {
            ResultSet res = stmt.executeQuery(query);
            return res;
        }
        catch (SQLException e  )
        {
            return null;
        }
    }


    public int joinTourn(String email, String trnName)
    {
        String query = "insert into RegisteredTournaments(email, trnName) values ('"+email +"','"+trnName+"');";
        System.out.println("In joinTourn ");
        try
        {
            System.out.println(query);
           int  rs = stmt.executeUpdate(query);
         //   System.out.println(rs.next());
           // return rs.next();
            System.out.println(rs);
            return rs;

        }
        catch (SQLException e)
        {
            return 0;
        }
    }


}
