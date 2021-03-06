package com.badminton.Servlets;

//import com.badminton.Admin;
import com.badminton.Database;
import com.badminton.Teams;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class TeamsDB {
    Database db = new Database();
    private static Statement stmt;
    public TeamsDB() {
        stmt  = db.dbConnection();
    }

    public int addTournament(String tournName, String teamName)
    {
        String mquery = "insert into TournamentTeams (tournamentName ,teamName) values ('"+ tournName +"','"+teamName+"');";
        System.out.println(mquery);
        try {
            int k =    stmt.executeUpdate(mquery);
            return k;
        }
        catch(SQLException e)
        {
            return 0;
        }

    }

    public  ArrayList<String> listAll(){
        try{
            String query = "select Name from TournamentTeams";
            ResultSet rs =  stmt.executeQuery(query);
            ArrayList<String> teamName = new ArrayList<>();
            while(rs.next()){
                teamName.add(rs.getString("teamName"));
            }
            return teamName;
        }catch (SQLException q) {
            String response = "Sql query not correct or no such data.";
            System.out.println(response);
            return null;
        }
    }

    public  ResultSet getAll(String TournamentTeams){
        try{
            String query = "select * from TournamentTeams where tournamentName = '"+TournamentTeams+"'";
            return stmt.executeQuery(query);

            //return teams;
        }catch (SQLException q) {
            String response = "Sql query not correct or no such data.";
            System.out.println(response);
            return null;
        }
    }
}
